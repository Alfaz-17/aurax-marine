"use client"

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Award, Upload, X } from 'lucide-react';
import api from '@/lib/api';
import { uploadToCloudinary } from '@/lib/utils/cloudinary';

export default function AdminBrandPage() {
  const [brands, setBrands] = useState<any[]>([]);
  const [newBrand, setNewBrand] = useState({ name: '', logo: '' });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await api.get('/brands');
        setBrands(res.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleAddBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrand.name.trim() || !logoFile) return;

    setIsUploading(true);
    try {
      const logoUrl = await uploadToCloudinary(logoFile, "brands");
      const res = await api.post('/brands', { 
        name: newBrand.name, 
        logo: logoUrl 
      });
      setBrands([...brands, res.data]);
      setNewBrand({ name: '', logo: '' });
      setLogoFile(null);
      setLogoPreview('');
      setMessage({ type: 'success', text: 'Partner brand synchronized.' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Synchronization failure.' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Sever partnership link with this brand?')) return;
    try {
      await api.delete(`/brands/${id}`);
      setBrands(brands.filter(b => b._id !== id));
      setMessage({ type: 'success', text: 'Brand removed.' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Operation failed.' });
    }
  };

  if (isLoading) return <div className="text-xs font-bold uppercase tracking-widest animate-pulse">Syncing Brand Registry...</div>;

  return (
    <div className="max-w-4xl space-y-12">
      <div className="border-b border-border pb-8">
        <h1 className="text-3xl font-bold text-primary uppercase tracking-tighter">Strategic Partners</h1>
        <p className="text-xs font-bold text-accent uppercase tracking-[0.3em] mt-2">Manage Manufacturer Relationships & Branding</p>
      </div>

      {message.text && (
        <div className={`p-4 text-xs font-bold uppercase tracking-widest border-l-4 ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-500' : 'bg-red-50 text-red-700 border-red-500'}`}>
          {message.text}
        </div>
      )}

      <div className="bg-white p-10 border border-border">
         <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Onboard New Partner</h2>
         <form onSubmit={handleAddBrand} className="space-y-6">
            <div className="flex gap-6 items-end">
               <div className="flex-1 space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Brand Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Caterpillar Marine" 
                    className="w-full px-6 py-4 bg-muted/20 border border-border focus:border-accent outline-none text-xs font-bold"
                    value={newBrand.name}
                    onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                    required
                  />
               </div>
               <div className="w-48 space-y-2 text-center">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-4">Logo ID</label>
                  {logoPreview ? (
                     <div className="relative h-14 border border-border bg-muted flex items-center justify-center p-2">
                        <img src={logoPreview} alt="Logo" className="max-h-full max-w-full object-contain" />
                        <button type="button" onClick={() => { setLogoFile(null); setLogoPreview(''); }} className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full"><X className="w-3 h-3" /></button>
                     </div>
                  ) : (
                     <label className="block h-14 border-2 border-dashed border-border hover:border-accent flex items-center justify-center cursor-pointer transition-colors bg-muted/10">
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <input type="file" accept="image/*" onChange={handleLogoChange} className="hidden" required />
                     </label>
                  )}
               </div>
            </div>
            <button type="submit" disabled={isUploading} className="w-full py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-xl">
               {isUploading ? 'Uploading Identity...' : 'Register Partnership'}
            </button>
         </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         {brands.map(brand => (
            <div key={brand._id} className="bg-white p-6 border border-border flex flex-col items-center group relative h-48">
               <div className="flex-1 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <img src={brand.logo} alt={brand.name} className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest text-center border-t border-border pt-4 w-full">{brand.name}</h3>
               <button onClick={() => handleDelete(brand._id)} className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                  <Trash2 className="w-3 h-3" />
               </button>
            </div>
         ))}
         {brands.length === 0 && (
            <div className="col-span-full py-20 bg-muted/20 border border-dashed border-border text-center text-xs font-bold text-muted-foreground uppercase opacity-50 italic">No partners currently registered in the grid</div>
         )}
      </div>
    </div>
  );
}
