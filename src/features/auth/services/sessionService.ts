import { fetchCurrentUser } from "../api/queries";
import { toAuthUser } from "../adapters/authAdapter";
import type { AuthUser } from "../model/types";

let cachedUser: AuthUser | null = null;

export const sessionService = {
  async getCurrentUser(forceReload = false): Promise<AuthUser> {
    if (cachedUser && !forceReload) return cachedUser;
    const raw = await fetchCurrentUser();
    cachedUser = toAuthUser(raw);
    return cachedUser;
  },

  // Dat user mock truc tiep (che do demo khong co backend)
  setMockUser(user: AuthUser): void {
    cachedUser = user;
  },

  getCachedRole(): AuthUser["role"] | null {
    return cachedUser?.role ?? null;
  },

  clear(): void {
    cachedUser = null;
  },
};