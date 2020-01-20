const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Community schema
 */
const CommunitySchema = new Schema({
	owner_email: {
		type: String,
		required: true,
	},
	activated: {
		type: Boolean,
		default: false,
	},
	community_name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	picture: {
		type: String,
		required: false
	},
	community_contact: {
		type: String,
		required: false
	},
	phone: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	facebook: {
		type: String,
		required: false
	},
	instagram: {
		type: String,
		required: false
	},
	vimeo: {
		type: String,
		required: false
	},
	youtube: {
		type: String,
		required: false
	},
	about: {
		type: String,
		required: false
	},

	// filters in binary sequence format
	days: {
		type: String,
		required: true
	},
	times: {
		type: String,
		required: true
	},
	frequency: {
		type: String,
		required: true
	},
	ages: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	parking: {
		type: String,
		required: true
	},
	ministries: {
		type: String,
		required: true
	},
	other_services: {
		type: String,
		required: true
	},
	average_attendance: {
		type: Number,
		required: true
	},
	ambiance: {
		type: String,
		required: true
	},
	event_type: {
		type: String,
		required: true
	},
	support_type: {
		type: String,
		required: true
	},
});

module.exports = Community = mongoose.model("community", CommunitySchema);
