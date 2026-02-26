
"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Sparkles, Type, ShieldCheck, Loader2 } from 'lucide-react';
import api from '@/lib/api';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    autoBackgroundRemoval: false,
    applyWatermark: true,
    watermarkText: 'AURAX Marine Solutions'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await api.get('/settings');
        if (data) {
          setSettings({
            autoBackgroundRemoval: data.autoBackgroundRemoval,
            applyWatermark: data.applyWatermark,
            watermarkText: data.watermarkText || 'AURAX Marine Solutions'
          });
        }
      } catch (err) {
        console.error("Error fetching settings:", err);
        setMessage({ type: 'error', text: 'Failed to load system settings.' });
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage({ type: '', text: '' });
    try {
      await api.post('/settings', settings);
      setMessage({ type: 'success', text: 'Settings updated successfully.' });
    } catch (err) {
      console.error("Error saving settings:", err);
      setMessage({ type: 'error', text: 'Failed to save settings.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="text-[10px] font-bold uppercase tracking-widest p-10">Accessing secure settings...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex items-center justify-between border-b border-border pb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary uppercase tracking-tighter">System Console</h1>
          <p className="text-xs font-bold text-accent uppercase tracking-[0.3em] mt-2">Global UI & Asset Processing Configuration</p>
        </div>
        <ShieldCheck className="w-8 h-8 text-primary/20" />
      </div>

      {message.text && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-4 text-[10px] font-bold uppercase tracking-widest border-l-4 ${
            message.type === 'success' ? 'bg-green-50 text-green-700 border-green-500' : 'bg-red-50 text-red-700 border-red-500'
          }`}
        >
          {message.text}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Background Removal Toggle */}
        <div className="bg-white p-10 border border-border space-y-6 group hover:border-accent transition-all">
          <div className="flex items-center gap-4 text-primary">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xs font-bold uppercase tracking-widest">Asset Normalization</h2>
          </div>
          <p className="text-[10px] text-muted-foreground uppercase leading-relaxed tracking-wider">
            Automatically remove backgrounds from all uploaded product images using local AI processing.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSettings(prev => ({ ...prev, autoBackgroundRemoval: !prev.autoBackgroundRemoval }))}
              className={`w-full py-4 text-[10px] font-bold uppercase tracking-widest transition-all ${
                settings.autoBackgroundRemoval 
                  ? 'bg-secondary text-white shadow-xl shadow-indigo-100' 
                  : 'bg-muted/10 text-muted-foreground border border-border'
              }`}
            >
              Auto BG Removal: {settings.autoBackgroundRemoval ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>

        {/* Watermarking Controls */}
        <div className="bg-white p-10 border border-border space-y-6 group hover:border-accent transition-all">
          <div className="flex items-center gap-4 text-primary">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="text-xs font-bold uppercase tracking-widest">Brand Protection</h2>
          </div>
          <p className="text-[10px] text-muted-foreground uppercase leading-relaxed tracking-wider">
            Apply a subtle watermark to all main and gallery images during the upload process.
          </p>
          <div className="pt-4 space-y-4">
            <button
              onClick={() => setSettings(prev => ({ ...prev, applyWatermark: !prev.applyWatermark }))}
              className={`w-full py-4 text-[10px] font-bold uppercase tracking-widest transition-all ${
                settings.applyWatermark 
                  ? 'bg-accent text-white shadow-xl shadow-blue-100' 
                  : 'bg-muted/10 text-muted-foreground border border-border'
              }`}
            >
              Apply Watermark: {settings.applyWatermark ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>
      </div>

      {/* Watermark Text Configuration */}
      <div className="bg-white p-10 border border-border space-y-8">
        <div className="flex items-center gap-4 text-primary border-b border-border pb-6">
          <Type className="w-5 h-5" />
          <h2 className="text-xs font-bold uppercase tracking-widest">Watermark Identity</h2>
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Identifier Text</label>
          <input
            type="text"
            value={settings.watermarkText}
            onChange={(e) => setSettings(prev => ({ ...prev, watermarkText: e.target.value }))}
            className="w-full bg-muted/20 border border-border p-5 text-sm outline-none focus:border-accent transition-colors font-medium"
            placeholder="e.g. AURAX MARINE"
          />
          <p className="text-[9px] text-muted-foreground italic">Current: {settings.watermarkText || 'None'}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full md:w-auto px-12 py-5 bg-secondary text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-accent transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Committing Changes...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" /> Synchronize System Settings
            </>
          )}
        </button>
      </div>
    </div>
  );
}
