function PastTrips() {
    return (
        <div class="screenMargin">
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div class="screenTitle">Past Trips</div>
                <div class="w-full text-sm text-left text-white dark:text-gray-400 grid gap-3">
                    
                    <div class="grid gap-2 grid-cols-11  border-b border-glass-700 xl:text-lg bg-ride-100">
                            <div class="pl-2 col-span-10 bg-ride-900 text-ride-100 rounded-br-lg text-lg">Trip #1:
                                <span class="ml-1">
                                Querétaro @ 07/15/2022
                                </span>
                            </div>
                            <div class="mt-1">
                                🔍
                            </div>
                            <div class="pl-2 col-span-5">
                                <span>Santa Mónica Public Park</span>
                            </div>
                            <div class="">
                                →
                            </div>
                            <div class="col-span-5">
                                <span>UAQ University</span>
                            </div>
                    </div>
                    <div class="grid gap-2 grid-cols-11  border-b border-glass-700 xl:text-lg bg-ride-100">
                        <div class="pl-2 col-span-10 bg-ride-900 text-ride-100 rounded-br-lg text-lg">Trip #2:
                            <span class="ml-1">
                            Querétaro @ 07/18/2022
                            </span>
                        </div>
                        <div class="mt-1">
                            🔍
                        </div>
                        <div class="pl-2 col-span-5">
                            <span>Santa Mónica Public Park</span>
                        </div>
                        <div class="">
                            →
                        </div>
                        <div class="col-span-5">
                            <span>City Hall FCP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PastTrips;