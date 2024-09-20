import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Home, Users, Clipboard, Heart, Book, DollarSign, LayoutGrid, Lock, FileText, LogOut, ChevronDown } from 'lucide-react'

export default function AdminInterface() {
    return (
        <div className="flex h-screen bg-[var(--bg-100)]">
            {/* Sidebar */}
            <aside className="w-64 bg-[var(--bg-200)] p-4 flex flex-col">
                <div className="flex items-center mb-8">
                    <User size={48} className="text-[var(--primary-200)]" />
                    <div className="ml-3">
                        <div className="font-bold">User Name</div>
                        <div className="text-[var(--accent-100)] text-sm">Secretario</div>
                    </div>
                </div>
                <nav className="flex-1">
                    <MenuItem icon={<Home />} label="Inicio" active />
                    <MenuItem icon={<Users />} label="Administración" />
                    <SubMenuItem label="Hermanos Seglares" />
                    <SubMenuItem label="Asistencias" />
                    <SubMenuItem label="Procedimientos" />
                    <SubMenuItem label="Defunciones" />
                    <SubMenuItem label="Apostolados" />
                    <MenuItem icon={<DollarSign />} label="Economía" />
                    <MenuItem icon={<LayoutGrid />} label="Estructura OFS" />
                    <MenuItem icon={<Lock />} label="Accesos" />
                    <MenuItem icon={<FileText />} label="Reportes" />
                </nav>
                <Button variant="ghost" className="mt-auto text-[var(--text-200)] justify-start">
                    <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
                </Button>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[var(--primary-100)]">ADMINISTRACIÓN</h1>
                    <div className="text-[var(--primary-200)] font-bold">SIOFS</div>
                </div>
                <div className="text-sm text-[var(--text-200)] mb-4">HERMANOS SEGLARES/ALTA</div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Personal Data */}
                    <div className="bg-[var(--bg-200)] p-4 rounded-lg">
                        <h2 className="font-bold mb-4 text-[var(--primary-100)]">DATOS PERSONALES</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Nombre(s)" />
                            <CustomSelect placeholder="Estado Civil" />
                            <Input placeholder="Apellido Paterno" />
                            <Input placeholder="Apellido Materno" />
                            <Input placeholder="Fecha de Nacimiento" />
                            <Input placeholder="Lugar de Nacimiento" />
                            <Input placeholder="Número Celular" />
                            <Input placeholder="Número de Casa" />
                            <Input placeholder="Familia franciscana" className="col-span-2" />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="bg-[var(--bg-200)] p-4 rounded-lg">
                        <h2 className="font-bold mb-4 text-[var(--primary-100)]">DIRECCIÓN</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Código Postal" />
                            <Input placeholder="Asentamiento" />
                            <Input placeholder="Municipio" />
                            <Input placeholder="Entidad" />
                            <Input placeholder="País" />
                            <Input placeholder="Calle" />
                            <Input placeholder="Número Interior" />
                            <Input placeholder="Número Exterior" />
                            <Input placeholder="Referencias" className="col-span-2" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    <Button className="bg-[var(--accent-100)] hover:bg-[var(--accent-200)] text-white">GUARDAR</Button>
                    <Button variant="outline" className="text-[var(--primary-100)] border-[var(--primary-100)]">CANCELAR</Button>
                </div>
            </main>
        </div>
    )
}

function MenuItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
    return (
        <div className={`flex items-center p-2 rounded-md mb-1 ${active ? 'bg-[var(--accent-100)] text-white' : 'text-[var(--text-200)] hover:bg-[var(--bg-300)]'}`}>
            {icon}
            <span className="ml-2">{label}</span>
        </div>
    )
}

function SubMenuItem({ label }: { label: string }) {
    return (
        <div className="flex items-center p-2 pl-8 text-sm text-[var(--text-200)] hover:bg-[var(--bg-300)]">
            {label}
        </div>
    )
}

function CustomSelect({ placeholder }: { placeholder: string }) {
    return (
        <div className="relative">
            <select className="w-full p-2 border rounded-md appearance-none bg-white text-[var(--text-200)]">
                <option value="" disabled selected>{placeholder}</option>
                <option value="soltero">Soltero</option>
                <option value="casado">Casado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viudo">Viudo</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--text-200)]" size={20} />
        </div>
    )
}