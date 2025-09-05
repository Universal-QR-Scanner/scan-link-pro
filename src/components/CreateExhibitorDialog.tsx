import { useState } from 'react';
import { Users, Building, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Exhibitor } from '@/types/exhibition';

interface CreateExhibitorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Omit<Exhibitor, 'id' | 'secureToken' | 'scannerUrl' | 'createdAt' | 'updatedAt'>) => void;
  exhibitionId: string;
}

export const CreateExhibitorDialog = ({ open, onOpenChange, onSubmit, exhibitionId }: CreateExhibitorDialogProps) => {
  const [formData, setFormData] = useState({
    exhibitionId,
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    isActive: true
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.email) {
      return;
    }

    setLoading(true);
    try {
      await onSubmit({
        ...formData,
        exhibitionId
      });
      setFormData({
        exhibitionId,
        name: '',
        company: '',
        email: '',
        phoneNumber: '',
        isActive: true
      });
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Add New Exhibitor
          </DialogTitle>
          <DialogDescription>
            Create a new exhibitor account and generate their unique scanner URL.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Contact Name *</Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="e.g., John Smith"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="company"
                placeholder="e.g., Acme Corp"
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="e.g., john@acme.com"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="phoneNumber"
                placeholder="e.g., +1-555-0123"
                value={formData.phoneNumber}
                onChange={(e) => updateField('phoneNumber', e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => updateField('isActive', checked)}
            />
            <Label htmlFor="isActive">Active (can scan QR codes)</Label>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create Exhibitor'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};