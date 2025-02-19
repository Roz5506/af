"use server"

export async function logScrollAction(sectionId: string) {
  // This function doesn't actually scroll on the server,
  // but it allows us to log the action or perform any server-side operations if needed
  console.log(`Scroll to ${sectionId} requested`)
}

