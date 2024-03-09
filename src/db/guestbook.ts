export type GuestBookData = {
  id: string;
  created_by: string;
  body: string;
};

export const getGuestbookEntries = async (): Promise<GuestBookData[]> => {
  return [];
};

export const saveGuestbookEntry = (formData: FormData) => {
  console.info({ formData });
};

export const authGuestbook = async (): Promise<
  { user?: string } | undefined
> => {
  return;
};
