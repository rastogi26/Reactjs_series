const conf = {
  // we convert it into string so that is grauntees it is string sometime if this not contains any char only numbers it treats like numerical so it creates problem
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwritePojectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};



export default conf