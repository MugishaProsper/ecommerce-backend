export const generateVerificationCode = () => {
    return Math.floor(Math.random(1, 51423) * 624573).toString()
}