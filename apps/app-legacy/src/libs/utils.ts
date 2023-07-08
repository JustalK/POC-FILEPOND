export const getServerUrl = (poc: string) => {
  return `${process.env.NX_SERVER_PROTOCOL}://${process.env.NX_SERVER_HOST}:${process.env.NX_SERVER_PORT}/${poc}/upload`;
};
