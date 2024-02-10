function generateOTP(length) {
    const characters = '0123952718699716';
    let OTP = '';
    for (let i = 0; i < length; i++) {
        OTP += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return OTP;
}

// Example usage:
const otp = generateOTP(4); // Generates a 6-digit OTP
console.log(otp);
