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
    await store.commit('setMembers', sortedMembers(users));
}


export async function getUsers():Promise<any> {
    const res = await axios.get("https://sizablepicture-eu.backendless.app/api/data/userdata");
    return res.data;
}

export const sortedMembers = (members:any) => {
    const sortedArray = members.sort((a:any, b:any) => {
        if (a["count"] < b["count"]) return -1
        if (a["count"] > b["count"]) return 1
        return 0
    }).reverse();
    console.log(sortedArray)
    return sortedArray;
}

export async function overwriteUserOnChange(mId:string) {
    setTimeout(async () => {
        const res = await axios.get("https://sizablepicture-eu.backendless.app/api/data/userdata/" + mId)
    }, 2000)

}
