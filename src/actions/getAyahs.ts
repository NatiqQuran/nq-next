"use server";

import { ayahsController } from "@/connection";
import { AyahsListResponseData } from "@ntq/sdk";

export const getAyahs = async (offset: number, limit: number): Promise<AyahsListResponseData> => {

    // TODO:‌update
    const response = await ayahsController.list({ params: { limit: limit } as any });

    return response.data
}