import FormData from 'form-data'


/** Converts any nested JSON to formData. */
export function convertFormData (inJSON: any, formData?: FormData, parentKey?: string) {
	let form_data = formData || new FormData()
	for(let key in inJSON){
		// 1. If it is a recursion, then key has to be constructed like "parent.child" where parent JSON contains a child JSON
		// 2. Perform append data only if the value for key is not a JSON, recurse otherwise!
		let constructedKey = key
		if(parentKey){
			constructedKey = parentKey + '.' + key
		}

		let value = inJSON[key]
		if(value && value.constructor === {}.constructor){
			// This is a JSON, we now need to recurse!
			convertFormData(value, form_data, constructedKey)
		}else{
			form_data.append(constructedKey, inJSON[key])
		}
	}
	return form_data
}
