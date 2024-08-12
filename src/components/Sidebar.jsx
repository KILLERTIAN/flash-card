// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   Home,
//   BookOpen,
//   Package2,
//   Settings,
//   PanelLeft,
//   CircleChevronRight,
//   CircleChevronLeft,
// } from 'lucide-react';
// import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
// import { Button } from './ui/button';
// import { motion } from 'framer-motion';
// import Tooltip from './Tooltip';

// const Sidebar = () => {
//   const [hovered, setHovered] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const location = useLocation();

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <>
//       {/* Mobile Sidebar using Sheet */}
//       <Sheet className="sm:hidden">
//         <SheetTrigger asChild>
//           <Button
//             size="icon"
//             variant="outline"
//             className="sm:hidden border-0 hover:bg-transparent"
//           >
//             <PanelLeft className="h-5 w-5" />
//             <span className="sr-only">Toggle Menu</span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left" className="sm:max-w-xs w-[250px]">
//           <nav className="grid gap-6 text-lg font-medium">
//             <Link
//               to="/"
//               className="group flex items-center gap-2 rounded-full bg-[#05140D] text-lg font-semibold text-primary-foreground py-2 px-4 md:py-3 md:px-6 max-w-[150px]"
//             >
//               <img
//                 className="md:h-8 md:w-8 h-7 w-7 rounded-full"
//                 src="https://res.cloudinary.com/djoebsejh/image/upload/v1721187808/srktgdcijec0zqmlgvbh.png"
//                 alt="Logo"
//               />
//               <span className="text-white">FlashLearn</span>
//             </Link>

//             <Link
//               to="/"
//               className={`flex items-center gap-2 rounded-lg transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6 ${
//                 location.pathname === '/' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
//               }`}
//             >
//               <Home className="h-5 w-5" />
//               <span>Home</span>
//             </Link>

//             <Link
//               to="/flashcards"
//               className={`flex items-center gap-2 rounded-lg transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6 ${
//                 location.pathname === '/flashcards' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
//               }`}
//             >
//               <BookOpen className="h-5 w-5" />
//               <span>Flashcards</span>
//             </Link>

//             <Link
//               to="/dashboard"
//               className={`flex items-center gap-2 rounded-lg transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6 ${
//                 location.pathname === '/dashboard' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
//               }`}
//             >
//               <Package2 className="h-5 w-5" />
//               <span>Dashboard</span>
//             </Link>
//           </nav>
//           <nav className="flex absolute bottom-5 text-lg font-medium">
//             <Link
//               to="/settings"
//               className={`flex items-center gap-2 rounded-lg transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6 ${
//                 location.pathname === '/settings' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
//               }`}
//             >
//               <Settings className="h-5 w-5" />
//               <span>Settings</span>
//             </Link>
//           </nav>
//         </SheetContent>
//       </Sheet>

//       {/* Desktop Sidebar */}
//       <aside
//         className={`fixed hidden sm:flex inset-y-0 left-0 z-[999] flex-col bg-background border-r ${
//           isExpanded ? 'w-[200px]' : 'w-14'
//         } transition-all duration-700 ease-out`}
//       >
//         <div className="flex items-center justify-start px-2 min-h-[100px] z-[999] bg-white">
//           <Link
//             to="/"
//             className={`group flex items-center justify-center py-1 rounded-full bg-[#05140D] text-lg font-semibold text-primary-foreground md:text-base ${
//               isExpanded ? 'md:p-2 p-1 ' : 'h-9 w-9 md:h-10 md:w-10 '
//             }`}
//           >
//             <img
//               className="md:h-7 md:w-7 h-6 w-6 rounded-full"
//               src="https://res.cloudinary.com/djoebsejh/image/upload/v1721187808/srktgdcijec0zqmlgvbh.png"
//               alt="Logo"
//             />
//             {isExpanded && (
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-white text-lg pr-2"
//               >
//                 FlashLearn
//               </motion.span>
//             )}
//           </Link>
//           <Button
//             size="icon"
//             variant="outline"
//             onClick={toggleExpand}
//             className={`border-0 bg-transparent hover:bg-transparent transition-transform duration-700 ease-out mt-16 ${
//               isExpanded
//                 ? 'absolute translate-x-[173px]'
//                 : 'absolute translate-x-[28px]'
//             }`}
//           >
//             {isExpanded ? (
//               <CircleChevronLeft className="h-5 w-5 bg-white rounded-full transition-transform duration-700 ease-out" />
//             ) : (
//               <CircleChevronRight className="h-5 w-5 bg-white rounded-full transition-transform duration-700 ease-out" />
//             )}
//           </Button>
//         </div>

//         <nav className="flex flex-col items-start justify-start gap-4 px-2">
//           <Link
//             to="/"
//             className={`relative flex items-center gap-2 rounded-lg transition-colors hover:bg-gray-200 ${
//               isExpanded
//                 ? 'justify-start py-2 px-4 w-full'
//                 : 'justify-center h-9 w-9'
//             } ${location.pathname === '/' ? 'bg-gray-200' : ''}`}
//             onMouseEnter={() => setHovered('Home')}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Home className="h-5 w-5" />
//             {hovered === 'Home' && !isExpanded && <Tooltip text="Home" />}
//             {isExpanded && (
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Home
//               </motion.span>
//             )}
//           </Link>

//           <Link
//             to="/flashcards"
//             className={`relative flex items-center gap-2 rounded-lg transition-colors hover:bg-gray-200 ${
//               isExpanded
//                 ? 'justify-start py-2 px-4 w-full'
//                 : 'justify-center h-9 w-9'
//             } ${location.pathname === '/flashcards' ? 'bg-gray-200' : ''}`}
//             onMouseEnter={() => setHovered('Flashcards')}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <BookOpen className="h-5 w-5" />
//             {hovered === 'Flashcards' && !isExpanded && (
//               <Tooltip text="Flashcards" />
//             )}
//             {isExpanded && (
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Flashcards
//               </motion.span>
//             )}
//           </Link>

//           <Link
//             to="/dashboard"
//             className={`relative flex items-center gap-2 rounded-lg transition-colors hover:bg-gray-200 ${
//               isExpanded
//                 ? 'justify-start py-2 px-4 w-full'
//                 : 'justify-center h-9 w-9'
//             } ${location.pathname === '/dashboard' ? 'bg-gray-200' : ''}`}
//             onMouseEnter={() => setHovered('Dashboard')}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Package2 className="h-5 w-5" />
//             {hovered === 'Dashboard' && !isExpanded && (
//               <Tooltip text="Dashboard" />
//             )}
//             {isExpanded && (
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Dashboard
//               </motion.span>
//             )}
//           </Link>
//         </nav>

//         <nav className="flex h-full items-end">
//           <Link
//             to="/settings"
//             className={`relative flex items-center gap-2 rounded-lg transition-colors hover:bg-gray-200 ${
//               isExpanded
//                 ? 'justify-start py-2 px-4 w-full'
//                 : 'justify-center h-9 w-9'
//             } ${location.pathname === '/settings' ? 'bg-gray-200' : ''}`}
//             onMouseEnter={() => setHovered('Settings')}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <Settings className="h-5 w-5" />
//             {hovered === 'Settings' && !isExpanded && (
//               <Tooltip text="Settings" />
//             )}
//             {isExpanded && (
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Settings
//               </motion.span>
//             )}
//           </Link>
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
