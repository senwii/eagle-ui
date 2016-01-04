/**
 * Created by mac on 16/1/3.
 */
export default obj=>{
    let methods={
        init:true,
        loaded:true,
        close:true,
        success:true,
        cancel:true,
        checked:true,
        active:true,
        getValue:true,

        update:true,
        delete:true,
        query:true,
        add:true,
        insert:true,
        ajax:true,

        default:true

        //method
    };

    obj.prototype.methods = methods;
}