export function setChange(entityId,entityType,title,country){
    return{
        type:"Set_Change",
        entityId:entityId,
        entityType:entityType,
        title:title,
        country:country
    };
}
