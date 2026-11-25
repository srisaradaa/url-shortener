import { useQuery } from '@tanstack/react-query';
import api from '../api/api';

export const useFetchMyShortUrls = (token) => {
  return useQuery({
    queryKey: ["my-shortUrls", token], 
    queryFn: async () => {
      return await api.get("/api/urls/myurls", {
        headers: {
          // "Content-Type": "application/json", not needed since only get request
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      });
    },
    select: (data) => {
      const sortedDate = data.data.sort(
        (a,b) => new Date(b.createdDate) - new Date(a.createdDate)
      );

      return sortedDate;
    },
    enabled: !!token,
    staleTime: 5000,
  }
  );
};

export const useFetchTotalClicks = (token) => {
  return useQuery({
    queryKey: ["url-totalclick", token],

    queryFn: async () => {
      return await api.get(
        "/api/urls/totalClicks?startDate=2026-01-01T00:00:00&endDate=2027-12-31T23:59:59",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    },

    select: (data) => data.data,
    enabled: !!token,
    staleTime: 5000,
  });
};