import axios from "axios";
import {Store} from "vuex";


export async function persistData(member:any):Promise<boolean> {
    const res = await axios.put("https://sizablepicture-eu.backendless.app/api/data/userdata/" + member.objectId, {
        count: member.count,
    })
    return true;
}

export async function persistDataToStore(store:Store<object>):Promise<void> {
    const users = await getUsers();

    const sortedMembers = users.sort(function(a:any, b:any) {
        const keyA = a.count,
            keyB = b.count;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    console.log(sortedMembers);

    await store.commit('setMembers', users);
}


export async function getUsers():Promise<any> {
    const res = await axios.get("https://sizablepicture-eu.backendless.app/api/data/userdata");
    return res.data;
}
