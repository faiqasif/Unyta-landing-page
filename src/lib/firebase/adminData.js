import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getFirebaseDb } from "./client";

export const SUBMISSION_SOURCES = {
  creators: { collection: "creators", label: "Creators" },
  brands: { collection: "brands", label: "Brands" },
  demoRequests: { collection: "brandDemoRequests", label: "Demo requests" },
};

function toDate(value) {
  if (!value) return null;
  if (typeof value.toDate === "function") return value.toDate();
  if (value instanceof Date) return value;
  return null;
}

function normalize(snapshot) {
  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();
    // `password` is intentionally dropped here: the admin panel never displays
    // applicant credentials, so it never leaves Firestore.
    const { password, ...rest } = data;
    return { ...rest, id: docSnapshot.id, createdAt: toDate(data.createdAt) };
  });
}

async function fetchCollection(name) {
  const db = getFirebaseDb();
  const snapshot = await getDocs(query(collection(db, name), orderBy("createdAt", "desc")));
  return normalize(snapshot);
}

export function fetchCreators() {
  return fetchCollection(SUBMISSION_SOURCES.creators.collection);
}

export function fetchBrands() {
  return fetchCollection(SUBMISSION_SOURCES.brands.collection);
}

export function fetchDemoRequests() {
  return fetchCollection(SUBMISSION_SOURCES.demoRequests.collection);
}

/** All three form collections, fetched in parallel for the dashboard. */
export async function fetchAllSubmissions() {
  const [creators, brands, demoRequests] = await Promise.all([
    fetchCreators(),
    fetchBrands(),
    fetchDemoRequests(),
  ]);
  return { creators, brands, demoRequests };
}
