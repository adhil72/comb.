import Grid from "@/Library/Grid";

export default function GridSample() {
    return <div className="w-full">
        <Grid className="gap-2" autoArrangement arrangementFormula="2-4-6-8">
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => <div key={index} className="h-52 rounded-xl w-full bg-slate-900 flex items-center justify-center">item {item}</div>)
            }
        </Grid>
    </div>
}