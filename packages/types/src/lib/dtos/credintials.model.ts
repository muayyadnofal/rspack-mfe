import { RoleEnum } from "../enums";

export interface Credentials {
    id: string | null;
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    token: string | null;
    roles: RoleEnum[];
}
