export const hslFromDeg = (degree:number):string => {
    return `hsl(${degree%360}, 60%, 40%)`
}