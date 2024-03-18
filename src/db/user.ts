import { AuthUserAttributes } from "@/lib/auth";
import { KNEX_CONNECTION } from "./connection";

export namespace UserRepository {
  type OauthProviderType = "github" | "google";

  export type User = AuthUserAttributes;

  export type AddUserDTO = Omit<User, "id">;

  export const getUserByProviderUserId = async (
    oauth_type: OauthProviderType,
    oauth_user_id: string,
  ): Promise<User | undefined> => {
    return KNEX_CONNECTION("auth_user")
      .select<User>()
      .where("oauth_type", oauth_type)
      .where("oauth_user_id", oauth_user_id)
      .first();
  };

  export const addUser = async (dto: AddUserDTO): Promise<User | undefined> => {
    const id = await KNEX_CONNECTION("auth_user")
      .insert(dto)
      .returning<{ id: string }[]>("id")
      .then((it) => (it && it.length ? it[0].id : null));

    if (!id) return;

    return {
      id,
      ...dto,
    };
  };
}
