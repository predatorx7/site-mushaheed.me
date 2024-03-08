export type GuestBookData = {
  id: string;
  created_by: string;
  body: string;
};

export const getGuestbookEntries = async (): Promise<GuestBookData[]> => {
  return [];
};

export const saveGuestbookEntry = async (formData: FormData) => {};

export const authGuestbook = async (): Promise<
  { user?: string } | undefined
> => {
  return;
};
