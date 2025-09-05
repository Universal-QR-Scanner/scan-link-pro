import { Exhibition, Exhibitor, ScanRecord, QRCodeData } from '@/types/exhibition';

// Mock API base URL - in production this would be your backend API
const API_BASE_URL = '/api';

// Mock data storage
let exhibitions: Exhibition[] = [
  {
    id: 'expo-1',
    name: 'TechExpo 2025',
    description: 'The premier technology exhibition of the year',
    startDate: '2025-04-01',
    endDate: '2025-04-03',
    location: 'Convention Center, New York',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: 'active'
  }
];

let exhibitors: Exhibitor[] = [
  {
    id: 'exhibitor-1',
    exhibitionId: 'expo-1',
    name: 'John Smith',
    company: 'Acme Corp',
    email: 'john@acme.com',
    phoneNumber: '+1-555-0123',
    secureToken: 'secure-token-abc123',
    scannerUrl: `${window.location.origin}/scanner/exhibitor-1?token=secure-token-abc123`,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let scanRecords: ScanRecord[] = [];

// Utility function to generate unique IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Utility function to generate secure tokens
const generateSecureToken = () => `token-${Math.random().toString(36).substr(2, 32)}`;

// Exhibition API
export const exhibitionAPI = {
  getAll: async (): Promise<Exhibition[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...exhibitions];
  },

  getById: async (id: string): Promise<Exhibition | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return exhibitions.find(expo => expo.id === id) || null;
  },

  create: async (data: Omit<Exhibition, 'id' | 'createdAt' | 'updatedAt'>): Promise<Exhibition> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newExhibition: Exhibition = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    exhibitions.push(newExhibition);
    return newExhibition;
  },

  update: async (id: string, data: Partial<Exhibition>): Promise<Exhibition | null> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = exhibitions.findIndex(expo => expo.id === id);
    if (index === -1) return null;
    
    exhibitions[index] = {
      ...exhibitions[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    return exhibitions[index];
  },

  delete: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = exhibitions.findIndex(expo => expo.id === id);
    if (index === -1) return false;
    
    exhibitions.splice(index, 1);
    // Also remove associated exhibitors
    exhibitors = exhibitors.filter(exhibitor => exhibitor.exhibitionId !== id);
    return true;
  }
};

// Exhibitor API
export const exhibitorAPI = {
  getByExhibition: async (exhibitionId: string): Promise<Exhibitor[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return exhibitors.filter(exhibitor => exhibitor.exhibitionId === exhibitionId);
  },

  getById: async (id: string): Promise<Exhibitor | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return exhibitors.find(exhibitor => exhibitor.id === id) || null;
  },

  getByToken: async (token: string): Promise<Exhibitor | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return exhibitors.find(exhibitor => exhibitor.secureToken === token) || null;
  },

  create: async (data: Omit<Exhibitor, 'id' | 'secureToken' | 'scannerUrl' | 'createdAt' | 'updatedAt'>): Promise<Exhibitor> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const secureToken = generateSecureToken();
    const id = generateId();
    
    const newExhibitor: Exhibitor = {
      ...data,
      id,
      secureToken,
      scannerUrl: `${window.location.origin}/scanner/${id}?token=${secureToken}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    exhibitors.push(newExhibitor);
    return newExhibitor;
  },

  update: async (id: string, data: Partial<Exhibitor>): Promise<Exhibitor | null> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = exhibitors.findIndex(exhibitor => exhibitor.id === id);
    if (index === -1) return null;
    
    exhibitors[index] = {
      ...exhibitors[index],
      ...data,
      updatedAt: new Date().toISOString()
    };
    return exhibitors[index];
  },

  delete: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = exhibitors.findIndex(exhibitor => exhibitor.id === id);
    if (index === -1) return false;
    
    exhibitors.splice(index, 1);
    return true;
  }
};

// Scan API
export const scanAPI = {
  recordScan: async (exhibitorId: string, qrData: QRCodeData): Promise<ScanRecord> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const exhibitor = exhibitors.find(e => e.id === exhibitorId);
    if (!exhibitor) {
      throw new Error('Exhibitor not found');
    }

    const scanRecord: ScanRecord = {
      id: generateId(),
      exhibitorId,
      exhibitionId: exhibitor.exhibitionId,
      customer: {
        id: qrData.customerId,
        name: qrData.name,
        email: qrData.email,
        phoneNumber: qrData.phoneNumber,
        company: qrData.company,
        jobTitle: qrData.jobTitle
      },
      timestamp: new Date().toISOString()
    };

    scanRecords.push(scanRecord);
    return scanRecord;
  },

  getScansByExhibitor: async (exhibitorId: string): Promise<ScanRecord[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return scanRecords.filter(record => record.exhibitorId === exhibitorId);
  },

  getScansByExhibition: async (exhibitionId: string): Promise<ScanRecord[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return scanRecords.filter(record => record.exhibitionId === exhibitionId);
  }
};

// Export all APIs
export const api = {
  exhibitions: exhibitionAPI,
  exhibitors: exhibitorAPI,
  scans: scanAPI
};

export default api;