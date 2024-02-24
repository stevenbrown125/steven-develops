export interface Page {
    params?: Params;
    searchParams?: { [key: string]: string | string[] | undefined }
}

interface Params {
    slug: string;
}