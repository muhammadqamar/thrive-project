export const config = {
  appId: process.env.NEXT_PUBLIC_AZURE_APP_ID,
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
  scope: [
    ' user.read',
    'Notes.Read',
    'Notes.Create',
    'Notes.ReadWrite',
    'Notes.Read.All',
    'Notes.ReadWrite.All',
    'Notes.ReadWrite.CreatedByApp',
    'Notes.Read.All',
    'Notes.ReadWrite.All',
  ],
  authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_TANANT_ID}`,
};
