export interface Exhibition {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'active' | 'completed';
}

export interface Exhibitor {
  id: string;
  exhibitionId: string;
  name: string;
  company: string;
  email: string;
  phoneNumber?: string;
  secureToken: string;
  scannerUrl: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  company?: string;
  jobTitle?: string;
}

export interface ScanRecord {
  id: string;
  exhibitorId: string;
  exhibitionId: string;
  customer: Customer;
  timestamp: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface QRCodeData {
  customerId: string;
  name: string;
  email: string;
  phoneNumber?: string;
  company?: string;
  jobTitle?: string;
}

export interface ScanResult {
  success: boolean;
  data?: QRCodeData;
  error?: string;
  timestamp: string;
}