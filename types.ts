
export interface Game {
  id: string;
  title: string;
  titleEn?: string;
  ageRange: string;
  rating: number;
  price: number | 'Free';
  imageUrl: string;
  isBestSeller?: boolean;
  description?: string;
  descriptionEn?: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn?: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type UserRole = 'guest' | 'customer' | 'manager' | 'school' | 'teacher';
export type Language = 'vi' | 'en';

export interface AuthState {
  isLoggedIn: boolean;
  role: UserRole;
  username: string;
}

export interface CartItem extends Game {
  quantity: number;
}

export type Page = 
  | 'home' | 'catalog' | 'detail' | 'about' | 'login' | 'register' | 'cart' | 'checkout' | 'success' | 'failure' 
  | 'user_dashboard' | 'school_dashboard' | 'teacher_dashboard' | 'analytics' | 'achievements' | 'settings' | 'user_game_room'
  | 'teacher_library' | 'teacher_analytics' | 'teacher_rooms' | 'teacher_profile'
  | 'school_members' | 'school_library' | 'school_products' | 'school_contracts' | 'school_permissions' | 'school_support' | 'school_profile'
  | 'admin_analytics' | 'admin_orders' | 'admin_contracts' | 'admin_warnings' | 'admin_games' | 'admin_users' | 'admin_permissions' | 'admin_support' | 'admin_settings';
