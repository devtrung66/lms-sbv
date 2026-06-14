import { fetchRoles } from "../api/queries";
import { createRole, updateRole, deleteRole } from "../api/mutations";
import { toRole } from "../adapters/roleAdapter";
import type { Role, RoleFormValues } from "../model/types";

// Tang dich vu nghiep vu vai tro: ket noi API + adapter.
export const roleService = {
  // Lay danh sach vai tro
  async getList(): Promise<Role[]> {
    const raws = await fetchRoles();
    return raws.map(toRole);
  },

  // Tao moi vai tro
  async create(values: RoleFormValues): Promise<Role> {
    const raw = await createRole(values);
    return toRole(raw);
  },

  // Cap nhat vai tro
  async update(id: string, values: RoleFormValues): Promise<Role> {
    const raw = await updateRole(id, values);
    return toRole(raw);
  },

  // Xoa vai tro (chan xoa vai tro he thong o tang UI)
  remove(id: string): Promise<void> {
    return deleteRole(id);
  },
};