import { decode } from 'theme';

export async function load({ params }) {
  return { json: decode(params.slug) };
}
