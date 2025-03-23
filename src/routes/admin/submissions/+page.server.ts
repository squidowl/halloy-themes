import { env } from '$env/dynamic/private';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import * as submission from '$lib/submission';

export const load: PageServerLoad = async ({ locals, url, cookies }) => {
    if (!locals.isAdmin) {
        error(401, 'unauthorized');
    }

    if (url.searchParams.has('logout')) {
        cookies.delete('admin-token', { path: '/' });
        redirect(303, '/');
    }

    return {
        submissions: await submission.load()
    };
};

export const actions: Actions = {
    login: async ({ request, cookies }) => {
        const form = await request.formData();
        const password = form.get('password')?.toString() ?? '';

        if (password == env.ADMIN_PASSWORD) {
            cookies.set('admin-token', env.ADMIN_TOKEN!, { path: '/' });
            redirect(303, '/admin/submissions');
        }

        return fail(401);
    },
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
