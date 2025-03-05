import Connect from "@/database/connection";
import Category from "@/database/models/category.schema";



export async function createCategory(req: Request){
    try{
        await Connect();
        const {name, description} = await req.json();
        const existingCategory = await Category.findOne({name: name});
        if(existingCategory){
            return Response.json({message: "Category already exists"}, {status: 400});
        }
        await Category.create({
            name: name,
            description: description
        })
        return Response.json({
            message: "Category created successfully"
        }, {status: 201});

    }catch (error){
        console.log(error);
        return Response.json(
            {
                message: "Error creating category"
            },
            {status: 500}
        )
    }
}

export async function getCategories(){
    try{
        await Connect();
        const categories = await Category.find({})
        if(categories.length === 0){
            return Response.json({message: "No categories found"}, {status: 404});
        }
        return Response.json({
            message: "Categories fetched successfully",
            data: categories
        }, {status: 201});
    }catch (error){
        console.log(error);
        return Response.json({
            message: "Error fetching categories"
        }, {status: 200});
    }
}