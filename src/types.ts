// list more
export interface ListMoreProps {
    id: string;
    title: string;
    text: string;
    link: string;
    linkText: string;
    image: string;
    imageAlt: string;
    imageStyle?: React.CSSProperties;
}

// header props
export interface HeaderPageProps {
    title: string;
    text: string[];
    image: string;
    imageAlt: string;
}

export interface DrugDevProgram {
    program: string;
    summary: string;
    progress: number;
    status: string;
}

export interface ImageSectionProps {
    title: string;
    image: string;
    imageAlt: string;
    text?:string;
}

export interface ModalValueI {
    call_name: string;
    name: string;
    position: string;
    figure: string;
    description: string;
}

export interface ExecutiveI {
    call_name: string;
    name: string;
    position: string;
    figure: string;
    description: string;
}

export interface EmployeeI {
    name: string;
    position: string;
}

export interface TeamDataI {
    executives: ExecutiveI[];
    employees: EmployeeI[];
}

