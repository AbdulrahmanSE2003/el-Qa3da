// components/layout/MobilePlatformLoader.tsx
const MobilePlatformLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-foreground" />
    </div>
  )
}

export default MobilePlatformLoader
