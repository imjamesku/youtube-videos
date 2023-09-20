async function getInput1() {
    return 2
}
async function main1() {
    const x = await getInput1()
    console.log(x)
}
main1()