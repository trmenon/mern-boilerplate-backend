const mongoose= require('mongoose');
const {Schema}= mongoose;

const ThemeSchema= new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    displayString: {
        type: String,
        required: true
    },
    avatarTheme: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Theme", ThemeSchema);