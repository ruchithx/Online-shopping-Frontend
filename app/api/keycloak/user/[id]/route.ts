import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { getAdminToken } from '@/utils/keycloak';
import url from 'url';

export async function GET(req: NextRequest) {
  try {
    const adminToken = await getAdminToken();

    const params = url.parse(req.url, true).query;

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_KEYCLOAK_HOST_URL}/admin/realms/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}/users/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(
      'Error fetching user from Keycloak:',
      error?.response?.data || error.message,
    );

    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.error || 'Failed to fetch user from Keycloak';

    return NextResponse.json({ error: message }, { status });
  }
}
