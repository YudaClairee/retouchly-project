import { useUser } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function useStoreUserEffect() {
  const { isAuthenticated } = useConvexAuth();
  const { user } = useUser();
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    async function createUser() {
      setIsLoading(true);
      try {
        const id = await storeUser();
        setUserId(id);
      } catch (error) {
        console.error("Failed to store user:", error);
      } finally {
        setIsLoading(false);
      }
    }

    createUser();
    return () => {
      setUserId(null);
      setIsLoading(false);
    };
  }, [isAuthenticated, storeUser, user?.sub]);

  return { userId, isLoading };
}
