
export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

export const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/; 
    return regex.test(phoneNumber);
}
