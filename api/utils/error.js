export const createError =(status, message)=>{
    const err = new Error()
    err.status =message;
    err.message = status
};