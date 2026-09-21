import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Sub-schema สำหรับสินค้าในตะกร้า
const cartItemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  product_quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  product_price: {
    type: Number,
    required: true,
    min: 0,
  },
  _id: false,
});

// User Schema หลัก
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    birth_date: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other", "not specified"],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    cart: [cartItemSchema],
  },
  {
    timestamps: true,
  },
);

// เข้ารหัสรหัสผ่านก่อนบันทึกลงฐานข้อมูล
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error;
  }
});

// ฟังก์ชันสำหรับตรวจสอบรหัสผ่าน
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model("User", userSchema);
