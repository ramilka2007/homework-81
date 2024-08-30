import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        unique: true,
    },
});

const Link = mongoose.model('Link', LinkSchema);
export default Link;