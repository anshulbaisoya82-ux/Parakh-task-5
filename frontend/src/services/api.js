const API_BASE_URL = import.meta.env.VITE_API_URL

const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json()
}

export const predictCareer = async (data) => {
  return apiRequest('/predict', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const analyzeCluster = async (data) => {
  return apiRequest('/cluster', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const analyzeSkillGap = async (data) => {
  return apiRequest('/skill-gap', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const getCareerDetails = async (career) => {
  return apiRequest(`/career/${encodeURIComponent(career)}`)
}

export const getRecommendations = async (data) => {
  return apiRequest('/recommendations', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}