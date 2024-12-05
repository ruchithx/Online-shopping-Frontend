import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { getAdminToken } from '@/utils/keycloak';
import url from 'url';
import { useParams } from 'next/navigation';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  try {
    const adminToken = await getAdminToken();
    const { id } = await params;

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
