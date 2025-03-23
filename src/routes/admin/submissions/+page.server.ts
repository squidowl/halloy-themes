import { error, fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import * as submission from '$lib/submission';

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.isAdmin) {
      error(401, 'unauthorized');
    }

    return {
        submissions: await submission.load()
    };
};

export const actions: Actions = {
    approve: async ({ request, locals }) => {
        if (!locals.isAdmin) {
            error(401, 'unauthorized');
        }

        const form = await request.formData();
        const id = form.get('id')?.toString();

        if (!id) {
            return fail(400);
        }

        await submission.approve(parseInt(id));

        return {
            approved: true
        };
    },
    reject: async ({ request, locals }) => {
        if (!locals.isAdmin) {
            error(401, 'unauthorized');
        }

        const form = await request.formData();
        const id = form.get('id')?.toString();

        if (!id) {
            return fail(400);
        }

        await submission.reject(parseInt(id));

        return {
            rejected: true
        };
    }
};
