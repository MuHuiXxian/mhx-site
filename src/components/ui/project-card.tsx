 import { Badge } from "@/components/ui/badge";
 import { Card,CardContent  } from "@/components/ui/card";
export default function ProjectCard({title,description,tags}:{
    title:string;
    description:string;
    tags: string[];
}){
    return (
            <Card className="rounded-xl border border-neutral-200 p-6">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
                <CardContent className="mt-12 flex flex-wrap gap-6 text-xs text-green-800">
                    {tags.map((tag, index) => (
                        <Badge key={index} >
                            {tag}
                        </Badge>                        
                    ))}
                </CardContent>
            </Card>
    )
}