export default function Content({ resultData }) {
    return (
        <div>
            { resultData && resultData.length > 0 ? (
                <>
                    <h1>content data display</h1>
                </>
            ): (
                <>
                    <h1>no content data</h1>
                </>
            )}
        </div>
    )
}