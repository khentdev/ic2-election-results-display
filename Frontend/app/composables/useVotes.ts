
export const useVotes = () => {

    const results = useQueries({
        queries: [{
            queryFn: () => votesService.getVotes({ position: "President", election_batch: 2 }),
            queryKey: ["votes", "President", 2],
            refetchInterval: 120,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 60 * 5 * 1000,
        }, {
            queryFn: () => votesService.getVotes({ position: "Vice President", election_batch: 2 }),
            queryKey: ["votes", "Vice President", 2],
            refetchInterval: 120,
            refetchIntervalInBackground: true,
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 60 * 5 * 1000,
        }]
    })

    const isPending = computed(() => results.value.some(r => r.isPending))
    const isError = computed(() => results.value.some(r => r.isError))

    const [getPresidents, getVicePresident] = results.value

    return {
        getPresidents: readonly(getPresidents),
        getVicePresident: readonly(getVicePresident),
        isPending,
        isError
    }

}